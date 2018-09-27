/*
	* ----------------------------------------------------------------------------
  * js Document public js Start
	* Author: DistantSound
	* IDE : UESTUDIO
  * ----------------------------------------------------------------------------
*/
$(function() {
        FastClick.attach(document.body);
        if (!placeholderSupport()) {
                $("[placeholder]").focus(function() {
                        var input = $(this);
                        if (input.val() == input.attr("placeholder")) {
                                input.val("");
                                input.removeClass("placeholder")
                        }
                }).blur(function() {
                        var input = $(this);
                        if (input.val() == "" || input.val() == input.attr("placeholder")) {
                                input.addClass("placeholder");
                                input.val(input.attr("placeholder"))
                        }
                }).blur()
        };
        // $(".nav-boxclose").hide();
        // $(".nav-boxopen").click(function() {
        //        $(".top-header").css("right", "0");
        //         $(".nav-boxclose").show();
        //         $(".nav-boxopen").hide()
        // });
        // $(".nav-boxclose").click(function() {
        //        $(".top-header").css("right", "-80%");
        //         $(".nav-boxclose").hide();
        //        $(".nav-boxopen").show()
        // }); 
        AOS.init({
                offset: 200,
                easing: "ease-in-quart",
                duration: 800,
                once: true,
                disable: function() {
                        var maxWidth = 1024;
                        return window.innerWidth < maxWidth
                }
        });

});
function placeholderSupport() {
        return "placeholder" in document.createElement("input")
};
