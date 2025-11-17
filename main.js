// anime({
//     targets: '.box',
//     translateX: 250,
//     duration: 3000,
//     easing: 'easeInOutSine',
//     loop: true,
//     direction: 'altnerate'
// })
import { animate, splitText, stagger } from 'https://esm.sh/animejs';

const { words } = splitText('p', {
    words: { wrap: 'clip'},
})

animate(words, {
    opacity: {
        from: 0
    },
    duration: 500,
    delay: stagger(1000),
    loop: true,
    loopDelay: 1000,
})

// animate('.box', {
//     opacity: {
//         from: 0
//     },
//     duration: 100,
//     loopDelay: 1000,
//     delay: 500,
// })
