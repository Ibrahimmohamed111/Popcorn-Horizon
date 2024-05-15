var previous_element= "";

var fillInputStyle = {
height: "100%"
}

function validateForm() {
  var x = document.forms["contact-us-form"]["fname"].value;
  if (x == "") {
    asAlertMsg({
      type: "error",
      title: "Empty Field",
      message: "'First Name' can not be empty!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return false;
  }

  var x = document.forms["contact-us-form"]["lname"].value;
  if (x == "") {
    asAlertMsg({
      type: "error",
      title: "Empty Field",
      message: "'Last Name' can not be empty!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return false;
  }

  var x = document.forms["contact-us-form"]["email"].value;
  if (x == "") {
    asAlertMsg({
      type: "error",
      title: "Empty Field",
      message: "'E-mail' can not be empty!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return false;
  }

  var x = document.forms["contact-us-form"]["m-num"].value;
  if (x == "") {
    asAlertMsg({
      type: "error",
      title: "Empty Field",
      message: "'Mobile Number' can not be empty!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return false;
  }

  var x = document.forms["contact-us-form"]["msg"].value;
  if (x == "") {
    asAlertMsg({
      type: "error",
      title: "Empty Field",
      message: "'Message' can not be empty!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return false;
  } else {
    asAlertMsg({
      type: "success",
      title: "Submitted",
      message: "Request submitted successfully!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return true;
  }
}

function performAnim(str){
  if(previous_element!=""){
  var val = document.forms["contact-us-form"][previous_element].value;
  var row;
  if(val.replace(/\s/g, "") != ""){
    console.log(previous_element+" has values")
    if(previous_element=='lname' || previous_element=='fname'){
      row = 'fname'
    }else{
      row = 'email'
    }
    Object.assign(document.getElementById(row+"-row100").style,fillInputStyle);
Object.assign(document.getElementById(previous_element+"-inputBox").style,fillInputStyle);
Object.assign(document.getElementById(previous_element+"-line").style,fillInputStyle);
  }
}
previous_element = ""+str+"";
}
