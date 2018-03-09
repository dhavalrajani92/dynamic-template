import './theme2.js';
import {Template} from "meteor/templating";
Template.theme2.helpers({
    getData(){
        return [
            {
                key:"option1",
                value:"option1",
                active: "theme2activeOption"
            },
            {
                key:"option2",
                value:"option2",
                active: ""
            },
            {
                key:"option3",
                value:"option3",
                active: ""
            },
            {
                key:"option4",
                value:"option4",
                active: ""
            },
        ]
    }
});