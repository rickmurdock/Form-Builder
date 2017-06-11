var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

var formElement = document.querySelector('form');

function buildForm() {
    for (let i = 0; i < formData.length; i++) {
        switch(formData[i].type) {
        case "text":
        case "email":
        case "tel":
            createInputElement(formData[i]);
            break;
        case "select":
            createSelectElement(formData[i]);
            break;
        case "textarea":
            createTextareaElement(formData[i]);
            break;
        default:
            break;
        }
    }
}

function createInputElement(inputData) {
    var inputElement = document.createElement('input');
    inputElement.type = inputData.type;
    inputElement.id = inputData.id;
    inputElement.value = inputData.label;
    formElement.appendChild(inputElement);

    var spanElement = document.createElement('span');
    spanElement.className = "fa " + inputData.icon + " icon";
    formElement.appendChild(spanElement);

};

function createTextareaElement(textareaData) {
    var textareaElement = document.createElement('textarea');
    textareaElement.type = textareaData.type;
    textareaElement.id = textareaData.id;
    textareaElement.value = textareaData.label;
    formElement.appendChild(textareaElement);
};

function createSelectElement(selectData) {
    var selectElement = document.createElement('select');
    selectElement.type = selectData.type;
    selectElement.id = selectData.id;
    selectElement.value = selectData.label;
    formElement.appendChild(selectElement);

    var selectParent = document.querySelector('select');

    for (let i = 0; i < selectData.options.length; i++) {
        var optionElement = document.createElement('option');  
        optionElement.value = selectData.options[i].value;
        optionElement.innerHTML = selectData.options[i].label;
        selectParent.appendChild(optionElement);
    }
};

buildForm();