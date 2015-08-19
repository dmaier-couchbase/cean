/**
 * Helper to check if the variable is defined
 */
function _isDefined(obj)
{  
    if (typeof obj == 'undefined' || obj == 'undefined' || obj == null)
    {
        return false;
    }
    
    return true;
}

//Module exports
module.exports = {
    
    isDefined : function(obj) {
    
        return _isDefined(obj);
    }
    
};