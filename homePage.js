document.getElementById('fileInput').addEventListener('change', function(event)
{
    const file = event.target.files[0];

    if (file && file.type === "text/plain")
    {
      const reader = new FileReader();

      reader.onload = function(e)
      {
        const text = e.target.result;
        document.getElementById('output').textContent = text;
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

    if (file && file.type.startsWith('image/'))
    {
      const reader = new FileReader();

      reader.onload = function(e)
      {
        const img = document.getElementById('imagePreview');
        img.src = e.target.result;
        img.style.display = 'block';
        document.getElementById('imageInput').style.display = 'none';  // make the upload image part disappear
      };

      reader.readAsDataURL(file);
    }
    else
    {
      alert("Please upload a valid image file.");
    }
});