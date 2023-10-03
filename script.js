const editableText = document.getElementById('editableText');
const saveButton = document.getElementById('saveButton');
const editInput = document.getElementById('editInput');
function enableEdit() {
  editInput.value = editableText.textContent;
  editInput.classList.remove('hidden');
  saveButton.classList.remove('hidden');
}

function saveChanges() {
  editableText.textContent = editInput.value;
  editInput.classList.add('hidden');
  saveButton.classList.add('hidden');  
  
}

