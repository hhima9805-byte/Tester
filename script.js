document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.business-card');
    const container = document.querySelector('.container');
    
    container.addEventListener('mousemove', function(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;
    });
    
    container.addEventListener('mouseleave', function() {
        card.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
    });
    
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'flash 0.5s ease';
            }, 10);
        });
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes flash {
        0%, 100% {
            background: rgba(139, 0, 0, 0.1);
        }
        50% {
            background: rgba(139, 0, 0, 0.4);
        }
    }
`;
document.head.appendChild(style);
