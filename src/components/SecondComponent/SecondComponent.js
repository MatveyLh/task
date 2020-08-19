import React from 'react';
import $ from 'jquery';
import './SecondComponent.css';

const SecondComponent = () => {
    $(document).ready(function() {
        var banner = $(".banner");
        var imgs = $(".img");
        function showAllObjects (object) {
            object.fadeIn(900);
        }
        function moving (object, speed) {
            banner.on('mousemove', function(event) {
                var X = Math.floor((event.pageX)/speed-20) + "px";
                var Y = Math.floor((event.pageY)/speed) + "px";
                object.css('transform', 'translate('+X+' , '+Y+')');
            });
        }
        function moveAll (object) {
            moving($(object[0]),12);
            moving($(object[1]),22);
            moving($(object[2]),8);
            moving($(object[3]),10);
            moving($(object[4]),20);
        }
        showAllObjects(imgs);
        moveAll(imgs);
    });

    return (
        <div className="bannerWrapper">
            <div className="banner">
                <div className="img item1"></div>
            </div>
        </div>

    )
};



export default SecondComponent;