function ParticleDiv() {
    return (
        <div>
            <ParticleButton />
        </div>
    )
}

function ParticleButton() {
    const createParticle = (x, y) => {
        // set style
        // size
        // background color
        const size = Math.floor(Math.random() * 20 + 5);

        // add animation

        return <Particle size={size} x={x} y={y} />
    }



    const pop = () => {
        // Loop to generate 30 particles at once
        for (let i = 0; i < 30; i++) {
            // We pass the mouse coordinates to the createParticle() function
            createParticle(e.clientX, e.clientY);
        }
    }

    return (
        <button
            id="button"
            onClick={(event) => pop(event)}
        >
            Click Me
        </button>)
}

function Partcle({ size, x, y }) {
    // create element
    const particle = <particle></particle>;

    // set particle size and color
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;

    // set destination
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;

    // set animation
    const animation = particle.animate([
        {
            // Set the origin position of the particle
            transform: `translate(${x - (size / 2)}px, ${y - (size / 2)}px)`,
            opacity: 1
        },
        {
            // We define the final coordinates as the second keyframe
            transform: `translate(${destinationX}px, ${destinationY}px)`,
            opacity: 0
        }
    ], {
        // Set a random duration from 500 to 1500ms
        duration: 500 + Math.random() * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        // Delay every particle with a random value from 0ms to 200ms
        delay: Math.random() * 200
    });

    animation.onfinish = () => {
        particle.remove();
    };

    return particle
}