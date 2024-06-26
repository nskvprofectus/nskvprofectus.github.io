const MobileNav = function MobileNav()
{
    let navToggle = document.getElementById('mobile-nav-toggle') ;
    let navWindow = document.getElementById('mobile-nav-window')

    navToggle.addEventListener('click', function() {
        // make the navWindow visible
        navWindow.classList.toggle('translate-x-full')
        navWindow.classList.toggle('translate-x-0')
        navWindow.classList.remove('duration-0')
        navWindow.classList.add('duration-500')

        // set aria-expanded attribute on menu toggle button
        if ( this.getAttribute('aria-expanded') === 'false' )
        {
            this.setAttribute('aria-expanded', 'true')

        } else {
            this.setAttribute('aria-expanded', 'false')
        }
    })
}()

const ToggleOpacity = function ToggleOpacity()
{
    let items = document.getElementsByClassName('toggle-opacity') ;

    for (let item of items) {
        item.addEventListener('click', function() {
            this.toggleAttribute('aria-hidden')
            this.classList.toggle('opacity-0')
            this.classList.toggle('opacity-100')
        })
    }
}()

export { MobileNav, ToggleOpacity };