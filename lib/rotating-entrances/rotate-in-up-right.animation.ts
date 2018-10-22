import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const rotateInUpRight = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: 'visible', opacity: 0, transform: 'rotate3d(0, 0, 1, -90deg)', easing: 'ease', offset: 0 }),
      style({ opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateInUpRightAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInUpRight', [
    transition(
      '0 <=> 1',
      [
        style({ 'transform-origin': 'right bottom' }),
        useAnimation(rotateInUpRight, {
          params: {
            duration: '{{duration}}',
            delay: '{{delay}}'
          }
        })
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}

export function rotateInUpRightOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInUpRightOnEnter', [
    transition(
      ':enter',
      [
        style({ visibility: 'hidden' }),
        style({ 'transform-origin': 'right bottom' }),
        useAnimation(rotateInUpRight, {
          params: {
            duration: '{{duration}}',
            delay: '{{delay}}'
          }
        })
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}