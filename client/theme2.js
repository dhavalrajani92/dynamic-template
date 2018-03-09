import './theme2.js';
import {Template} from "meteor/templating";
Template.theme2.helpers({
    getData(){
        return [
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
        ]
    }
});