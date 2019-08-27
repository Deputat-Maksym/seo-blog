var localURL = location.href,
    str = 'https://setapps.net';

var applicationServerPublicKey = 'BNvmduxDXvMhMX65k1ctzPsD2RAR_zayEhk65LQd-1yC1ym3L0NqHo570xRrWdPhDBBuFo-nI2gKJ-RpA1pM2jY';

var pushButton = document.querySelector('.js-push-btn');
var subscribeBlock = document.querySelector('.subscribe-block');

var isSubscribed = false;
var swRegistration = null;
var permission = Notification.permission;

function urlB64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');

    navigator.serviceWorker.register('/sw.js')
        .then(function (swReg) {
            console.log('Service Worker is registered', swReg);

            if (localURL.indexOf(str) != -1) {
                swRegistration = swReg;

                pushButton.disabled = true;

                // Set the initial subscription value
                swRegistration.pushManager.getSubscription()
                    .then(function (subscription) {
                        if (subscription) {
                            console.log('User IS subscribed.');
                            isSubscribed = true;
                            updateBtn();
                        } else if (!subscription && permission === 'granted') {
                          console.log('User Could be subscribed.');
                          updateBtn();
                        } else {
                          console.log('User is NOT subscribed.');
                          setTimeout(subscribeUser, 5000);
                        }
                    });

                initializeUI();
            } else {
                pushButton.style.display = 'none';
            }
        })
        .catch(function (error) {
            console.error('Service Worker Error', error);
        });
} else {
    console.warn('Push messaging is not supported');
}

function initializeUI() {
    pushButton.addEventListener('click', function () {
        pushButton.disabled = true;
        pushButton.classList.add('animated');
        if (isSubscribed) {
            unsubscribeUser(); // Unsubscribe user
        } else {
            subscribeUser();
        }
    })
};

function updateBtn() {
    if (Notification.permission === 'denied') {
        pushButton.disabled = true;
        subscribeBlock.classList.add('subscribe-block--blocked');
        return;
    }

    if (isSubscribed) {
        pushButton.classList.add('unsubscribe-true');
    } else {
        pushButton.classList.remove('unsubscribe-true');
    }

    pushButton.disabled = false;
    subscribeBlock.classList.remove('subscribe-block--blocked');
};

function subscribeUser() {
    var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then(function (subscription) {
            console.log('User is subscribed.');

            saveUserOnServer(subscription, '/wp-admin/admin-ajax.php?action=push_subscribe_user');

            isSubscribed = true;
            pushButton.classList.remove('animated');
            updateBtn();
        })
        .catch(function (err) {
            console.log('Failed to subscribe the user: ', err);
            pushButton.classList.remove('animated');
            updateBtn();
        });
};

function unsubscribeUser() {
    swRegistration.pushManager.getSubscription()
        .then(function (subscription) {
            if (subscription) {
                saveUserOnServer(subscription, '/wp-admin/admin-ajax.php?action=push_delete_user');
                return subscription.unsubscribe();
            }
        })
        .catch(function (error) {
            console.log('Error unsubscribing', error);
            pushButton.classList.remove('animated');
        })
        .then(function () {
            console.log('User is unsubscribed.');
            isSubscribed = false;
            pushButton.classList.remove('animated');
            updateBtn();
        });
};

function saveUserOnServer(subscription, url) {
    jQuery.ajax({
        url: url,
        // contentType: false,
        processData: true,
        type: 'POST',
        data: {
            data: JSON.stringify(subscription)
        },
        success: function (data) {
            console.log('success', data);
        },
        error: function (data) {
            console.log('error', data);
        }
    });
}
