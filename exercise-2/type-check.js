function type_check_v1(ma_var, type){
    switch(typeof ma_var){
        case 'object':
            if(Array.isArray(ma_var)) return type === "array";
            if(ma_var === null) return type === "null";
            break;
        default:
            return ma_var === type;
    }
}

function type_check_v2(ma_var, conf){
    for(key in conf){
        switch(key){
            case 'type':
                if(!type_check_v1(ma_var, conf(key))) return false;
            case 'value':
                
            case 'enum':
                
        }
    }
}