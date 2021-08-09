$('.nav-button').click(function(){
    var $this = $(this);
    $this.toggleClass('nav-button');
    if($this.hasClass('nav-button')){
        $this.text('Show Test Info');         
    } else {
        $this.text('Hide Test Info');
    }
});