console.log()
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instance = M.Materialbox.getInstance(elems);
   
    instance.open();
    instance.close();
    instance.destroy();
  });
 