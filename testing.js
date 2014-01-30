jQuery(function($) {
    var section = "",
        detail = "",
        obj = {};
    
    $("h2, h3, div").each(function(i, element) {
        switch(element.tagName) {
            case "H2": 
                section = element.innerHTML;
                console.log(section);
                obj[section] = {};
                break;
                
            case "H3": 
                var temp = element.innerHTML;
                switch(section) {
                    case "Properties":
                        console.log(/[a-Z]*\]/.exec(temp));
                        break;
                }
            case "DIV": 
  
        }
    });
});