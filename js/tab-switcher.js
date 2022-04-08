$("#landingpage .lpMainNav__tab").on("click", function () {
    let saveTarget = $(this).attr('data-tab')
    $("#landingpage .lpMainNav__tab.tabActive").removeClass('tabActive')
    $(this).addClass('tabActive')
    $("#landingpage .lpPageContent.lpContent--opened").toggleClass('lpContent--opened lpContent--closed')
    $("#landingpage .lpPageContent#" + saveTarget).toggleClass('lpContent--opened lpContent--closed')
})