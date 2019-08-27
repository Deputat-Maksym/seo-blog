jQuery(function ($) {
    var hasBeenClicked = false;
    $('.catalog_load_more-js').click(function (e) {
        e.preventDefault();
        if (!hasBeenClicked) {
            hasBeenClicked = true;
            var url = location.origin + '/wp-admin/admin-ajax.php?action=catalog_load_more';
            var dataAjax;
            var selector = $('#load-more-attr');
            dataAjax = 'catalog_pageid=' + selector.attr('data-catalog_pageid') +
                '&current_page=' + selector.attr('data-current-last-page') +
                '&posts_per_page=' + selector.attr('data-posts-per-page') +
                '&amount=' + selector.attr('data-amount')
            ;
            jQuery.ajax({
                url: url,
                type: 'POST',
                data: dataAjax,
                success: function (data) {
                    var apps = data.split('&json_load_more_params=')[0];

                    if (apps[apps.length - 1] === '0') {
                        apps = apps.slice(0, -1);
                    }
                    selector[0].innerHTML += apps;
                    var jsonLoadMoreParams = data.split('&json_load_more_params=')[1];
                    if (jsonLoadMoreParams[jsonLoadMoreParams.length - 1] === '0') {
                        jsonLoadMoreParams = jsonLoadMoreParams.slice(0, -1);
                    }
                    var reached_max = false;
                    jsonLoadMoreParams = JSON.parse(jsonLoadMoreParams);

                    $.each(jsonLoadMoreParams, function (key, value) {
                        selector.attr(key, value);
                        if (key === 'data-reached-max') {
                            reached_max = value;
                        }
                    });
                    if (reached_max) {
                        $('.catalog_load_more-js').css('display', 'none');
                    }
                    hasBeenClicked = false;
                },
                error: function () {
                    hasBeenClicked = false;
                }
            });
        }
    });

    $('.catalog_load_more-old-js').click(function (e) {
        e.preventDefault();
        if (!hasBeenClicked) {
            hasBeenClicked = true;
            var url = location.origin + '/wp-admin/admin-ajax.php?action=catalog_load_more';
            var dataAjax;
            var selector = $('#old-load-more-attr');
            dataAjax = 'catalog_pageid=' + selector.attr('data-catalog_pageid') +
                '&current_page=' + selector.attr('data-current-last-page') +
                '&posts_per_page=' + selector.attr('data-posts-per-page') +
                '&starting_id=' + selector.attr('data-starting_id');
            jQuery.ajax({
                url: url,
                type: 'POST',
                data: dataAjax,
                success: function (data) {
                    var apps = data.split('&json_load_more_params=')[0];

                    if (apps[apps.length - 1] === '0') {
                        apps = apps.slice(0, -1);
                    }
                    selector[0].innerHTML += apps;
                    var jsonLoadMoreParams = data.split('&json_load_more_params=')[1];
                    if (jsonLoadMoreParams[jsonLoadMoreParams.length - 1] === '0') {
                        jsonLoadMoreParams = jsonLoadMoreParams.slice(0, -1);
                    }
                    var reached_max = false, currentPage;
                    jsonLoadMoreParams = JSON.parse(jsonLoadMoreParams);

                    $.each(jsonLoadMoreParams, function (key, value) {
                        selector.attr(key, value);
                        if (key === 'data-reached-max') {
                            reached_max = value;
                        }
                        if (key === 'data-current-last-page') {
                            currentPage = value;
                        }
                    });
                    setPaginationButtons(currentPage);
                    if (reached_max) {
                        $('.catalog_load_more-old-js').css('display', 'none');
                    }
                    hasBeenClicked = false;
                },
                error: function () {
                    hasBeenClicked = false;
                }
            });
        }
    });
    $('.category_load_more-js').on('click', function (e) {
        e.preventDefault();
        if (!hasBeenClicked) {
            hasBeenClicked = true;
            var url = location.origin + '/wp-admin/admin-ajax.php?action=category_load_more';
            var dataAjax;
            var selector = $('#cat-load-more-attr');
            dataAjax = 'catalog_pageid=' + selector.attr('data-catalog_pageid') +
                '&current_page=' + selector.attr('data-current-last-page') +
                '&posts_per_page=' + selector.attr('data-posts-per-page') +
                '&amount=' + selector.attr('data-amount')
            ;
            jQuery.ajax({
                url: url,
                type: 'POST',
                data: dataAjax,
                success: function (data) {
                    var apps = data.split('&json_load_more_params=')[0];

                    if (apps[apps.length - 1] === '0') {
                        apps = apps.slice(0, -1);
                    }
                    selector[0].innerHTML += apps;
                    var jsonLoadMoreParams = data.split('&json_load_more_params=')[1];
                    if (jsonLoadMoreParams[jsonLoadMoreParams.length - 1] === '0') {
                        jsonLoadMoreParams = jsonLoadMoreParams.slice(0, -1);
                    }
                    var reached_max = false;
                    jsonLoadMoreParams = JSON.parse(jsonLoadMoreParams);

                    $.each(jsonLoadMoreParams, function (key, value) {
                        selector.attr(key, value);
                        if (key === 'data-reached-max') {
                            reached_max = value;
                        }
                    });
                    if (reached_max) {
                        $('.category_load_more-js').css('display', 'none');
                    }
                    hasBeenClicked = false;
                },
                error: function () {
                    hasBeenClicked = false;
                }
            });
        }
        return false
    });

    $('.search_load_more-js').click(function (e) {
        e.preventDefault();
        if (!hasBeenClicked) {
            hasBeenClicked = true;
            var url = location.origin + '/wp-admin/admin-ajax.php?action=search_load_more';
            var dataAjax;
            var selector = $('#search-load-more-attr');

            dataAjax = 'search_word=' + selector.attr('data-search_word') +
                '&current_page=' + selector.attr('data-current-last-page') +
                '&posts_per_page=' + selector.attr('data-posts-per-page') +
                '&amount=' + selector.attr('data-amount');

            jQuery.ajax({
                url: url,
                type: 'POST',
                data: dataAjax,
                beforeSend: function () {
                    $('.search_load_more-js button').attr("disabled", true);
                },
                success: function (data) {
                    var apps = data.split('&json_load_more_params=')[0];

                    if (apps[apps.length - 1] === '0') {
                        apps = apps.slice(0, -1);
                    }
                    selector[0].innerHTML += apps;
                    var jsonLoadMoreParams = data.split('&json_load_more_params=')[1];
                    if (jsonLoadMoreParams[jsonLoadMoreParams.length - 1] === '0') {
                        jsonLoadMoreParams = jsonLoadMoreParams.slice(0, -1);
                    }
                    var reached_max = false;
                    jsonLoadMoreParams = JSON.parse(jsonLoadMoreParams);

                    $.each(jsonLoadMoreParams, function (key, value) {
                        selector.attr(key, value);
                        if (key === 'data-reached-max') {
                            reached_max = value;
                        }
                    });
                    if (reached_max) {
                        $('.search_load_more-js').css('display', 'none');
                    }
                    hasBeenClicked = false;
                },
                error: function () {
                    hasBeenClicked = false;
                }
            });
        }
    });
    $('.tag-page-load-more-button-js').click(function (e) {
        e.preventDefault();
        if (!hasBeenClicked) {
            hasBeenClicked = true;
            var url = location.origin + '/wp-admin/admin-ajax.php?action=tag_page_load_more';
            var dataAjax;
            var selector = $('#tag-page-load-more-area');
            dataAjax = 'tag_slug=' + selector.attr('data-tag-page-slug') +
                '&current_page=' + selector.attr('data-current-page-num') +
                '&posts_per_page=' + selector.attr('data-posts-per-page') +
                '&max_page_num=' + selector.attr('data-max-page-num')
            ;
            jQuery.ajax({
                url: url,
                type: 'POST',
                data: dataAjax,
                success: function (data) {
                    var apps = data.split('&json_load_more_params=')[0];

                    if (apps[apps.length - 1] === '0') {
                        apps = apps.slice(0, -1);
                    }
                    selector[0].innerHTML += apps;
                    var jsonLoadMoreParams = data.split('&json_load_more_params=')[1];
                    if (jsonLoadMoreParams[jsonLoadMoreParams.length - 1] === '0') {
                        jsonLoadMoreParams = jsonLoadMoreParams.slice(0, -1);
                    }
                    var reached_max = false;
                    jsonLoadMoreParams = JSON.parse(jsonLoadMoreParams);

                    $.each(jsonLoadMoreParams, function (key, value) {
                        selector.attr(key, value);
                        if (key === 'data-reached-max') {
                            reached_max = value;
                        }
                        if (key === 'data-current-page-num') {
                            setPaginationButtons(value);
                        }
                    });
                    if (reached_max) {
                        $('.tag-page-load-more-button-js').css('display', 'none');
                    }
                    hasBeenClicked = false;
                },
                error: function () {
                    hasBeenClicked = false;
                }
            });
        }
    });

    $('.interesting_load_more-js').click(function (e) {
        e.preventDefault();

        if (!hasBeenClicked) {
            hasBeenClicked = true;
            var url = location.origin + '/wp-admin/admin-ajax.php?action=interesting_load_more';
            var dataAjax;
            var selector = $('#interesting-load-more-attr');
            dataAjax = 'main_pageid=' + selector.attr('data-main_pageid') +
                '&current_page=' + selector.attr('data-current-page-num') +
                '&posts_per_page=' + selector.attr('data-posts-per-page') +
                '&max_page_num=' + selector.attr('data-max-page-num')
            ;

            jQuery.ajax({
                url: url,
                type: 'POST',
                data: dataAjax,
                success: function (data) {
                    var apps = data.split('&json_load_more_params=')[0];

                    if (apps[apps.length - 1] === '0') {
                        apps = apps.slice(0, -1);
                    }
                    selector[0].innerHTML += apps;
                    var jsonLoadMoreParams = data.split('&json_load_more_params=')[1];
                    if (jsonLoadMoreParams[jsonLoadMoreParams.length - 1] === '0') {
                        jsonLoadMoreParams = jsonLoadMoreParams.slice(0, -1);
                    }
                    var reached_max = false;
                    jsonLoadMoreParams = JSON.parse(jsonLoadMoreParams);

                    $.each(jsonLoadMoreParams, function (key, value) {
                        selector.attr(key, value);
                        if (key === 'data-reached-max') {
                            reached_max = value;
                        }
                    });
                    if (reached_max) {
                        $('.interesting_load_more-js').css('display', 'none');
                    }
                    hasBeenClicked = false;
                },
                error: function () {
                    hasBeenClicked = false;
                }
            });
        }
    });

    $('.show-more-posts-js').click(function (e) {
        e.preventDefault();
        if (!hasBeenClicked) {
            hasBeenClicked = true;
            var url = location.origin + '/wp-admin/admin-ajax.php?action=blog_load_more';
            var dataAjax;
            var selector = $('#load-more-attr');
            dataAjax = 'currentCategoryId=' + selector.attr('data-category_id') +
                '&currentPage=' + selector.attr('data-current-page') +
                '&postsPerPage=' + selector.attr('data-posts-per-page') +
                '&maxPage=' + selector.attr('data-max_page');
            jQuery.ajax({
                url: url,
                type: 'POST',
                data: dataAjax,
                success: function (data) {
                    var apps = data.split('&json_load_more_params=')[0];

                    if (apps[apps.length - 1] === '0') {
                        apps = apps.slice(0, -1);
                    }
                    selector[0].innerHTML += apps;
                    var jsonLoadMoreParams = data.split('&json_load_more_params=')[1];
                    if (jsonLoadMoreParams[jsonLoadMoreParams.length - 1] === '0') {
                        jsonLoadMoreParams = jsonLoadMoreParams.slice(0, -1);
                    }
                    var maxPage, currentPage;
                    jsonLoadMoreParams = JSON.parse(jsonLoadMoreParams);

                    $.each(jsonLoadMoreParams, function (key, value) {
                        selector.attr(key, value);
                        if (key === 'data-max_page') {
                            maxPage = value;
                        }
                        if (key === 'data-current-page') {
                            currentPage = value;
                        }
                    });
                    setPaginationButtons(currentPage);
                    if (currentPage >= maxPage) {
                        $('.show-more-posts-js').css('display', 'none');
                    }
                    hasBeenClicked = false;
                },
                error: function () {
                    hasBeenClicked = false;
                }
            });
        }
    });
});

function setPaginationButtons(activeNum) {
    var url = location.origin + '/wp-admin/admin-ajax.php?action=get_pagination_button';
    var dataAjax;
    var selector = $('#pagination-buttons');
    var wrapper = $('#pagination-buttons-container');

    dataAjax = 'currentNum=' + selector.attr('data-current-num') +
        '&maxNum=' + selector.attr('data-max-num') +
        '&activeNum=' + activeNum +
        '&baseUrl=' + selector.attr('data-base-url');
    jQuery.ajax({
        url: url,
        type: 'POST',
        data: dataAjax,
        success: function (data) {

            if (data[data.length - 1] === '0') {
                data = data.slice(0, -1);
            }

            wrapper[0].innerHTML = data;
        },
        error: function (e) {
            console.log(e);
        }
    });
}
