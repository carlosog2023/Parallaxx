document.addEventListener('DOMContentLoaded', function () {
 
            const layer1 = document.getElementById('layer1');
            const layer2 = document.getElementById('layer2');
            const layer3 = document.getElementById('layer3');
            const layer4 = document.getElementById('layer4');
            const container = document.getElementById('parallax-container');
 
            const speed1 = 0.4;
            const speed2 = 0.2;
            const speed3 = 0.1;
            const speed4 = 0.1;
 
             function updateParallax() {
 
                const scrollOffset = container.getBoundingClientRect().top;
 
                layer1.style.transform = `translate3d(0, ${scrollOffset * speed1}px, 0)`;
                layer2.style.transform = `translate3d(0, ${scrollOffset * speed2}px, 0)`;
                layer3.style.transform = `translate3d(0, ${scrollOffset * speed3}px, 0)`;
                layer4.style.transform = `translate3d(0, ${scrollOffset * speed4}px, 0)`;
 
            }
           
            window.addEventListener('scroll', updateParallax);
            window.addEventListener('resize', updateParallax);
 
            updateParallax();
        });