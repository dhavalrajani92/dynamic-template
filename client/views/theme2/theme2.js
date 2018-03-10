import {Template} from "meteor/templating";
import {ReactiveVar} from "meteor/reactive-var";

Template.theme2.onCreated(function (){
    this.selectedOption = new ReactiveVar();
    this.optionsData = new ReactiveVar();
    this.defaultIndex = new ReactiveVar(3);
    this.optionsData.set([
        {
            _id:"1",
            text:"option1"
        },
        {
            _id:"2",
            text:"option2"
        },
        {
            _id:"3",
            text:"option3"
        },
        {
            _id:"4",
            text:"option4"
        },
    ])
});


Template.theme2.helpers({
    getData(){
        return Template.instance().optionsData.get();
    },
    selectedOption(){
        return Template.instance().selectedOption.get() ? Template.instance().selectedOption.get() : Template.instance().optionsData.get()[Template.instance().defaultIndex.get()];
    },
    getActiveOptionIndex(){
        var selectedOption = Template.instance().selectedOption.get();
        if(!selectedOption){
            return Template.instance().defaultIndex.get();
        }
        var data = Template.instance().optionsData.get();

        var selectedOptionIndex = data.findIndex((option)=>{
            if(option._id === selectedOption._id){
                return option;
            }
        }) ;

        if(selectedOptionIndex !== -1){
            return selectedOptionIndex;
        }
        return 0;
    },
    getView(){
        return Template.instance();
    }
});
