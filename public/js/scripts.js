  // sample data
  const navItems = [
  {
    label: 'Test One',
    link: '#1'
  },
  {
    label: 'Test Two',
    link: '#2'
  },
  {
    label: 'Test Three',
    link: '#3'
  }];

    // add the list items back
    const nav = document.querySelector('.site-nav ul');
    const markup = 
    `${navItems.map( navItem => `<li><a href="${navItem.link}">${navItem.label}</a></li>`).join('')}`;
    nav.innerHTML = markup;
    nav.firstChild.classList.add('active');

    // add the active class to the clicked link while removing it elsewhere
    // this can definitely be improved - ideas?
    // const links = nav.querySelectorAll('a');
    // const linkListItems = nav.querySelectorAll('li');
    // for (let i=0; i<links.length; i++){
    //   links[i].addEventListener('click', function(){
    //     removeClass();
    //     this.parentNode.classList.add('active');
    //   })
    // }
    // function removeClass(){
    //   for (let i=0; i<linkListItems.length; i++){
    //     linkListItems[i].classList.remove('active');
    //   }
    // }

    var navList = document.querySelectorAll('.site-nav li')

    for (var i = 0; i < navList.length; i++){
      navList[i].addEventListener('click',function() {   
        removeActive();
        this.classList.add('active'); } 
        )}

      function removeActive(){
       for (var i = 0; i < navList.length; i++){
        navList[i].classList.remove('active')}
      }

      //stickyNav
    let header = document.querySelector('.site-header').offsetTop;
  
    window.addEventListener('scroll', fixNav);

    function fixNav() {
      let nav = document.querySelector('.site-header');
      if(window.scrollY >= header) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
      }
      else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
    }