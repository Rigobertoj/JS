const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
)

salariosCol.sort(function(a,b){
    return a - b;
})

