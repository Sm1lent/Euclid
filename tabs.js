

// Tabs in "how do we work" section

window.addEventListener('DOMContentLoaded', function() { 
    document.querySelectorAll('.how_do_we_work_section__btn').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event){
          const path = event.currentTarget.dataset.path;
          document.querySelectorAll('.accordeon').forEach(function(tabContent) {
            tabContent.classList.remove('how_do_we_work_section__accordeon')
          });
          
          document.querySelectorAll(`.how_do_we_work_section__btn`).forEach(function(tabBtn) {
            tabBtn.classList.add('how_do_we_work_section__btn-inactive')
          });

          document.querySelector(`[data-target="${path}"]`).classList.add('how_do_we_work_section__accordeon')

          document.querySelector(`[data-path="${path}"]`).classList.remove('how_do_we_work_section__btn-inactive')
        });
    });
});


 




