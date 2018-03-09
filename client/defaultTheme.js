import {Template} from "meteor/templating";

Template.defaultTheme.helpers({
    getData(){
        return [
            {
                key:"option1",
                value:"option1",
                active: "theme1activeOption"
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
