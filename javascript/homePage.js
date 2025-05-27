// 
// TEXT FILE UPLOAD HANDLER
// 

document.getElementById('fileInput').addEventListener('change', function(event)
{
    const file = event.target.files[0];
    
    //check if the uploaded file is a valid plain text file
    if (file && file.type === "text/plain")
    {
      const reader = new FileReader();
      
      reader.onload = function(e)
      {
        const text = e.target.result;
        document.getElementById('output').textContent = text; //displays the text content in the <pre> element
        localStorage.setItem('uploadedText', text); // save to localStorage
        document.getElementById('fileInput').style.display = 'none'; // make the upload file part disappear
      };
  
      reader.readAsText(file);
    }
    else
    {
      alert("Please upload a valid .txt file.");
    }
  });

document.getElementById('imageInput').addEventListener('change', function(event)
{
    const file = event.target.files[0];
  
    //check if the uploaded file is an image
    if (file && file.type.startsWith('image/'))
    {
      const reader = new FileReader();
  
      reader.onload = function(e)
      {
        const img = document.getElementById('imagePreview');
        img.src = e.target.result;
        img.style.display = 'block';
        localStorage.setItem('uploadedImage', e.target.result); // save to localStorage so it persists after refresh
        document.getElementById('imageInput').style.display = 'none';  // make the upload image part disappear
      };
  
      reader.readAsDataURL(file); //needed for localStorage
    }
    else
    {
      alert("Please upload a valid image file.");
    }
});

//
// RESTORE UPLOADED CONTENT ON PAGE LOAD
//
window.addEventListener('DOMContentLoaded', () => {
  const savedText = localStorage.getItem('uploadedText');
  const savedImage = localStorage.getItem('uploadedImage');

  //load saved text (if any) from localStorage
  if (savedText)
  {
    document.getElementById('output').textContent = savedText;
    document.getElementById('fileInput').style.display = 'none';
  }

  //load saved image (if any) from localStorage
  if (savedImage)
  {
    const img = document.getElementById('imagePreview');
    img.src = savedImage;
    img.style.display = 'block';
    document.getElementById('imageInput').style.display = 'none';
  }

  //Show the Delete Buttons if Saved Data Exists
  if (savedText) {
    document.getElementById('deleteTextBtn').style.display = 'inline';
  }
  if (savedImage) {
    document.getElementById('deleteImageBtn').style.display = 'inline';
  }

});



// DELETE BUTTON FUNCTIONALITY

document.getElementById('deleteImageBtn').addEventListener('click', () => {
  localStorage.removeItem('uploadedImage');
  const img = document.getElementById('imagePreview');
  img.src = '';
  img.style.display = 'none';
  document.getElementById('imageInput').style.display = 'inline';
  document.getElementById('deleteImageBtn').style.display = 'none';
});

document.getElementById('deleteTextBtn').addEventListener('click', () => {
  localStorage.removeItem('uploadedText');
  document.getElementById('output').textContent = '';
  document.getElementById('fileInput').style.display = 'inline';
  document.getElementById('deleteTextBtn').style.display = 'none';
});

