window.addEventListener("load",function(e){var n=document.querySelector(".sidebar-commerc"),o=n.offsetTop,t=document.querySelector(".sidebar");function d(){pageYOffset>=o&&t.getBoundingClientRect().bottom>n.clientHeight?n.classList.add("fixed-top"):n.classList.remove("fixed-top")}window.matchMedia("(min-width: 1091px)").matches?window.addEventListener("scroll",d):removeEventListener("scroll",d),window.addEventListener("resize",function(){window.matchMedia("(min-width: 1091px)").matches?window.addEventListener("scroll",d):(removeEventListener("scroll",d),n.classList.remove("fixed-top"))})});var btnModalOpen=document.querySelector(".modal-show"),modalWindow=document.querySelector(".modal"),modalInnerLayer=document.querySelector(".modal-inner-layer");btnModalOpen.addEventListener("click",function(){modalWindow.classList.add("modal-open")}),modalInnerLayer.addEventListener("click",function(){modalWindow.classList.remove("modal-open")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb21tZXJjQm94IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29tbWVyY0JveFBvc2l0aW9uIiwib2Zmc2V0VG9wIiwic2lkZUJhckJvdHRvbSIsImZpeGluZ0Jsb2NrIiwicGFnZVlPZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJjbGllbnRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJidG5Nb2RhbE9wZW4iLCJtb2RhbFdpbmRvdyIsIm1vZGFsSW5uZXJMYXllciJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLGlCQUFpQixPQUFRLFNBQVNDLEdBQ3ZDLElBQUlDLEVBQWFDLFNBQVNDLGNBQWMsb0JBQ3BDQyxFQUFxQkgsRUFBV0ksVUFDaENDLEVBQWdCSixTQUFTQyxjQUFjLFlBaUIzQyxTQUFTSSxJQUNKQyxhQUFlSixHQUFzQkUsRUFBY0csd0JBQXdCQyxPQUFTVCxFQUFXVSxhQUNoR1YsRUFBV1csVUFBVUMsSUFBSSxhQUV6QlosRUFBV1csVUFBVUUsT0FBTyxhQW5CNUJoQixPQUFPaUIsV0FBVyx1QkFBdUJDLFFBQzNDbEIsT0FBT0MsaUJBQWlCLFNBQVVRLEdBRWxDVSxvQkFBb0IsU0FBVVYsR0FHaENULE9BQU9DLGlCQUFpQixTQUFVLFdBQzVCRCxPQUFPaUIsV0FBVyx1QkFBdUJDLFFBQzNDbEIsT0FBT0MsaUJBQWlCLFNBQVVRLElBRWxDVSxvQkFBb0IsU0FBVVYsR0FDOUJOLEVBQVdXLFVBQVVFLE9BQU8sa0JBWWxDLElBQUlJLGFBQWVoQixTQUFTQyxjQUFjLGVBQ3RDZ0IsWUFBY2pCLFNBQVNDLGNBQWMsVUFDckNpQixnQkFBa0JsQixTQUFTQyxjQUFjLHNCQUU3Q2UsYUFBYW5CLGlCQUFpQixRQUFTLFdBQ3JDb0IsWUFBWVAsVUFBVUMsSUFBSSxnQkFHNUJPLGdCQUFnQnJCLGlCQUFpQixRQUFTLFdBQ3hDb0IsWUFBWVAsVUFBVUUsT0FBTyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihlKSB7XHJcbiAgdmFyIGNvbW1lcmNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb21tZXJjJyksXHJcbiAgICAgIGNvbW1lcmNCb3hQb3NpdGlvbiA9IGNvbW1lcmNCb3gub2Zmc2V0VG9wLFxyXG4gICAgICBzaWRlQmFyQm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTA5MXB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZml4aW5nQmxvY2spXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZpeGluZ0Jsb2NrKVxyXG4gIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTA5MXB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmaXhpbmdCbG9jaylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZpeGluZ0Jsb2NrKVxyXG4gICAgICBjb21tZXJjQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkLXRvcCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBmaXhpbmdCbG9jaygpIHtcclxuICAgIGlmKHBhZ2VZT2Zmc2V0ID49IGNvbW1lcmNCb3hQb3NpdGlvbiAmJiBzaWRlQmFyQm90dG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IGNvbW1lcmNCb3guY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgIGNvbW1lcmNCb3guY2xhc3NMaXN0LmFkZCgnZml4ZWQtdG9wJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21tZXJjQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkLXRvcCcpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbnZhciBidG5Nb2RhbE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc2hvdycpLFxyXG4gICAgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSxcclxuICAgIG1vZGFsSW5uZXJMYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1pbm5lci1sYXllcicpO1xyXG5cclxuYnRuTW9kYWxPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpXHJcbn0pO1xyXG5cclxubW9kYWxJbm5lckxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpXHJcbn0pOyJdfQ==
