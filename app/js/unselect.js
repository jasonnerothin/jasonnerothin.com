'use strict';

var evwybody = ['gigs','skills','edu','portfolio','bio'];
function unselect(){
    for( var somebunny in evwybody ){
        $(somebunny).removeClass('selected');
    }
}