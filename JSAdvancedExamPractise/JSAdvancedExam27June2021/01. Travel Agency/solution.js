window.addEventListener('load', solution);

function solution() {
  const fields = document.querySelectorAll('input');

  const submitBtn = fields[5];
  const previewSection = document.getElementById('infoPreview');
  const previewClass = previewSection.parentElement;
  const editBtn = fields[6];
  const continueBtn = fields[7];
  const divBlock = document.getElementById('block');

  const input = {
    fname: fields[0],
    email: fields[1],
    phone: fields[2],
    address: fields[3],
    pcode: fields[4]
  };


  submitBtn.addEventListener('click', listInfo);


  function listInfo(event) {


    event.preventDefault();

    if (input.fname.value.trim() == '' || input.email.value.trim() == '') {
      return;
    }

    const fnameValue = e('li', {}, `Full Name: ${input.fname.value}`);
    const emailValue = e('li', {}, `Email: ${input.email.value}`);
    const phoneValue = e('li', {}, `Phone Number: ${input.phone.value}`);
    const addressValue = e('li', {}, `Address: ${input.address.value}`);
    const pcodeValue = e('li', {}, `Postal Code: ${input.pcode.value}`);

    let fnameSave = input.fname.value;
    let emailSave = input.email.value;
    let phoneSave = input.phone.value;
    let addressSave = input.address.value;
    let pcodeSave = input.pcode.value;

    previewSection.appendChild(fnameValue);
    previewSection.appendChild(emailValue);
    previewSection.appendChild(phoneValue);
    previewSection.appendChild(addressValue);
    previewSection.appendChild(pcodeValue);

    previewClass.appendChild(previewSection);

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    input.fname.value = "";
    input.email.value = "";
    input.phone.value = "";
    input.address.value = "";
    input.pcode.value = "";


    editBtn.addEventListener("click", editInfo);
    continueBtn.addEventListener('click', clearDiv);

    function editInfo() {
      let child = previewSection.lastElementChild;

      while (child) {
        previewSection.removeChild(child);
        child = previewSection.lastElementChild;
      }

      input.fname.value = fnameSave;
      input.email.value = emailSave;
      input.phone.value = phoneSave;
      input.address.value = addressSave;
      input.pcode.value = pcodeSave;

      editBtn.disabled = true;
      continueBtn.disabled = true;
      submitBtn.disabled = false;
    }

    function clearDiv() {
      while (divBlock.firstChild) {
        divBlock.removeChild(divBlock.firstChild);
      }

      const message = e('h3', {}, 'Thank you for your reservation!');

      divBlock.appendChild(message);
    }
  }


  function e(type, attr, ...content) {
    const element = document.createElement(type);

    for (let prop in attr) {
      element[prop] = attr[prop];
    }

    for (let item of content) {
      if (typeof item == 'string' || typeof item == 'number') {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }

    return element;
  }
}
