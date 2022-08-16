
var inputname = document.getElementById('name-vignesh');
var inputage = document.getElementById('age-vignesh');
var inputbmi = document.getElementById('bmi-vignesh');
var inputglu = document.getElementById('glu-vignesh');

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

// function to do Name input validation 
function validateName()
{
    let name = document.getElementById('pons-name').value;

    //if No input or String input is given,
    if(name.length == 0 || !name.match(/^[A-Za-z]/))   
    {
        inputname.innerHTML = '<span class="wrong">❌</i>';
        return false;
    }
    if(name.match(/^[A-Za-z]*\s*/)) //if input is a string
    {
        inputname.innerHTML = '<i class="check fa fa-check"></i>';
        return true;
    } 

}

// function to do Age input validation 
function validateAge()
{
    let age = document.getElementById('pons-age').value;
    if(age.length == 0)
    {
        inputage.innerHTML = '<span class="wrong">❌</i>';
        return false;
    }
    //if input is not an number 
    if(isNaN(age) || (age<0) || (age>110))
    {
        inputage.innerHTML = '<span class="wrong">❌</span>';
        return false;
    } 
    inputage.innerHTML = '<i class="check fa fa-check"></i>';
    return true;
}

// function to do BMI input validation 
function validateBmi()
{
    let bmi = document.getElementById('pons-bmi').value;
    if(bmi.length == 0 || isNaN(bmi) || (bmi<15) || (bmi>45))
    {
        inputbmi.innerHTML = '<span class="wrong">❌</i>';
        
        return false;
    }
    inputbmi.innerHTML = '<i class="check fa fa-check"></i>';
    return true;
}

// function to do glucose input validation 
function validateGlu()
{
    let glu = document.getElementById('pons-glu').value;
    if(glu.length == 0 || isNaN(glu) || (glu<80) || (glu>300))
    {
        inputglu.innerHTML = '<span class="wrong">❌</i>';
        return false;
    }
    inputglu.innerHTML = '<i class="check fa fa-check"></i>';
    return true;
}

function validateForm()
{
    if(!validateName() || !validateAge() || !validateBmi() || !validateGlu())
    {   
        alert("Please fill out the form correctly !! ")
        return false;
    }
} 