import {Template} from "meteor/templating";
import {ReactiveVar} from "meteor/reactive-var";

Template.theme1.onCreated(function (){
    this.selectedData = new ReactiveVar();
    this.optionsData = new ReactiveVar();
    this.defaultIndex = new ReactiveVar(0);
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


Template.theme1.helpers({
    getData(){
        return Template.instance().optionsData.get();
    },
    selectedOption(){
        return Template.instance().selectedData.get() ? Template.instance().selectedData.get() : Template.instance().optionsData.get()[Template.instance().defaultIndex.get()];
    },
    getActiveOptionIndex(){
        var selectedOption = Template.instance().selectedData.get();
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
