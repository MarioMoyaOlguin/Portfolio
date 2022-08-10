

const projectsObserver = ( ) => {
    
    if (typeof window !== 'undefined') {

        // animate projects
        const projects = document.querySelectorAll(".projects");
        const projectsObserver = new IntersectionObserver( entries => {
            entries.forEach( entry => {
                if(entry.isIntersecting) {

                    const forProjects = async () => {
                        const wait = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

                        for (let index = 0; index < projects[0].children.length; index++) {
    
                            projects[0].children[index].classList.replace("translate-y-6", "translate-y-0");
                            projects[0].children[index].classList.replace("opacity-0", "opacity-100");
                            await wait(300);   
                        }
                    }
                    forProjects();
                    projectsObserver.unobserve(entry.target);
                }
            })
        }, {threshold: 0.3} );
        projects.forEach( about => {
            projectsObserver.observe(about);
        })
    }
    
}

export const fadeObserver = () => {

    //animate fade
    if (typeof window !== 'undefined') {
        const titles = document.querySelectorAll(".fade");
        const titleObserver = new IntersectionObserver( entries => {
            entries.forEach( entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.replace("-translate-y-4", "translate-y-0");
                    entry.target.classList.replace("translate-x-8", "translate-x-0");
                    entry.target.classList.replace("translate-y-6", "translate-x-0");
                    entry.target.classList.replace("opacity-0", "opacity-100");
                    titleObserver.unobserve(entry.target);
                }
            })
        }, {threshold: 0.5} );
        titles.forEach( title => {
            titleObserver.observe(title);
        })
    }
}

export const barObserver = () => {
    //animate title bar

    if (typeof window !== 'undefined') {
        const bars = document.querySelectorAll(".bar");
        console.log(bars)

        const barObserver = new IntersectionObserver( entries => {
            entries.forEach( entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.replace("w-0", "w-24");
                    barObserver.unobserve(entry.target);
                }
            })
        }, {threshold: 1} );

        bars.forEach( bar => {
            barObserver.observe(bar);
        })
    }
}


export default projectsObserver