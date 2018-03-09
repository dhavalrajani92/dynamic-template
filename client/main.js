import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.dropdown.onCreated(function (){
    let arrowClassName = "arrow-down";
    let activeOptionClassName = "active";
    this.arrowClassName = new ReactiveVar(0);
    this.activeOptionClassName = new ReactiveVar(0);
    var data = Template.currentData();
    if(data && data.classes){
        var classNames = data.classes.split(" ");
        if(classNames.length === 2){
            arrowClassName = classNames[0];
            activeOptionClassName = classNames[1];
        }else if(classNames.length === 1){
            arrowClassName = classNames[0];
        }
    }
    this.arrowClassName.set(arrowClassName);
    this.activeOptionClassName.set(activeOptionClassName);

});
Template.dropdown.onRendered(function (){
    $('body').click(function(e) {
        if(!$(e.target).hasClass('dd-container')) $('.dd-container').removeClass('active');
    })
});

Template.dropdown.helpers({
    getArrowClass() {

        let classNames = Template.instance().arrowClassName.get();
        return classNames;
    },
    getActiveOptionClass() {
        let classNames = Template.instance().activeOptionClassName.get();
        return classNames;
    }
});


Template.dropdown.events({
    "click .dd-container": function (e,t){
        e.preventDefault();

        if($(e.currentTarget).hasClass("active")){
            $(e.currentTarget).removeClass("active");
        }else{
            $(".dd-container ").removeClass("active");
            $(e.currentTarget).addClass("active");
        }

    }
});