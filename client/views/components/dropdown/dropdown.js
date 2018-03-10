import {ReactiveVar} from "meteor/reactive-var";
import {Template} from "meteor/templating";
import "./dropdown.html"

Template.dropdown.onCreated(function (){
    let iconClass = "arrow-down";
    let selectedOptionClass = "active";
    this.iconClass = new ReactiveVar();
    this.selectedOptionClass = new ReactiveVar();
    var parentTemplateData = Template.currentData();
    if(parentTemplateData && parentTemplateData.iconClass){
        iconClass = Template.instance().data.iconClass;
    }
    if(parentTemplateData && parentTemplateData.activeOptionClass){
        selectedOptionClass = parentTemplateData.activeOptionClass;
    }
    this.iconClass.set(iconClass);
    this.selectedOptionClass.set(selectedOptionClass);

});
Template.dropdown.onRendered(function (){
    $('body').click(function(e) {
        if(!$(e.target).hasClass('dd-container')) $('.dd-container').removeClass('active');
    })
});

Template.dropdown.helpers({
    getArrowClass() {
        let iconClass = Template.instance().iconClass.get();
        return iconClass;
    },
    getActiveOptionClass(index) {

        let selectedOptionClass = Template.instance().selectedOptionClass.get();
        return index === Template.instance().data.activeIndex ? selectedOptionClass : "";
    },
    getSelectedOption(){
        var selectedOption = Template.instance().data.instance.selectedOption.get();
        if(!selectedOption){
            return Template.instance().data.options[0].text;
        }
        return selectedOption.text;
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

    },
    "click .dropdown-option": function (e,t) {
        e.preventDefault();
        t.data.instance.selectedOption.set(this);
    }
});