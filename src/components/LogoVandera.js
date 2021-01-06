import { useEffect } from 'react';
import { connect } from 'react-redux';


const LogoVandera = ({ actualSong }) => {

    useEffect(()=>{

    },[actualSong])

    const colorLogoSwitch = () => {
      switch(actualSong.id){
        case 1: return {
          v: 'rgb(195, 0, 0)',
          a: 'rgb(171, 0, 0)',
          n: 'rgb(145, 2, 2)',
          d: 'rgb(115, 0, 0)',
          e: 'rgb(82, 0, 0)',
          r: 'rgb(39, 0, 0)',
          a2: 'rgb(13, 0, 0)',
          last: 'rgb(0, 0, 0)'
          };
        case 2: return {
          v: 'rgb(19, 184, 0)',
          a: 'rgb(18, 166, 0)',
          n: 'rgb(16, 144, 0)',
          d: 'rgb(15, 139, 0)',
          e: 'rgb(13, 113, 0)',
          r: 'rgb(10, 94, 0)',
          a2: 'rgb(9, 82, 0)',
          last: 'rgb(7, 61, 0)'
          };
        case 3: return {
          v: 'rgb(136, 0, 119)',
          a: 'rgb(131, 0, 104)',
          n: 'rgb(90, 0, 79)',
          d: 'rgb(145, 0, 127)',
          e: 'rgb(153, 0, 128)',
          r: 'rgb(134, 0, 127)',
          a2: 'rgb(121, 0, 92)',
          last: 'rgb(90, 0, 95)'
          };
        case 4: return {
          v: 'rgb(102, 45, 119)',
          a: 'rgb(60, 21, 73)',
          n: 'rgb(42, 20, 48)',
          d: 'rgb(72, 39, 82)',
          e: 'rgb(87, 37, 103)',
          r: 'rgb(97, 37, 116)',
          a2: 'rgb(96, 41, 113)',
          last: 'rgb(64, 35, 73)'
          };
        case 5: return {
          v: 'rgb(107, 0, 119)',
          a: 'rgb(92, 0, 102)',
          n: 'rgb(76, 0, 84)',
          d: 'rgb(60, 0, 66)',
          e: 'rgb(44, 0, 48)',
          r: 'rgb(28, 0, 31)',
          a2: 'rgb(13, 0, 15)',
          last: 'rgb(0, 0, 0)'
          };
        case 6: return {
          v: 'rgb(169, 33, 59)',
          a: 'rgb(186, 38, 67)',
          n: 'rgb(152, 28, 52)',
          d: 'rgb(124, 26, 45)',
          e: 'rgb(148, 33, 56)',
          r: 'rgb(234, 51, 87)',
          a2: 'rgb(216, 42, 76)',
          last: 'rgb(161, 31, 57)'
          };
        case 7: return {
          v: 'rgb(184, 37, 142)',
          a: 'rgb(153, 31, 119)',
          n: 'rgb(118, 21, 90)',
          d: 'rgb(160, 30, 123)',
          e: 'rgb(181, 33, 139)',
          r: 'rgb(216, 51, 170)',
          a2: 'rgb(202, 49, 158)',
          last: 'rgb(148, 30, 115)'
          };
        case 8: return {
          v: 'rgb(48, 33, 178)',
          a: 'rgb(12, 0, 118)',
          n: 'rgb(11, 0, 110)',
          d: 'rgb(29, 13, 169)',
          e: 'rgb(32, 16, 173)',
          r: 'rgb(16, 0, 157)',
          a2: 'rgb(15, 0, 145)',
          last: 'rgb(11, 0, 105)'
          };
        case 9: return {
          v: 'rgb(20, 144, 97)',
          a: 'rgb(14, 105, 71)',
          n: 'rgb(11, 74, 50)',
          d: 'rgb(15, 103, 20)',
          e: 'rgb(19, 131, 88)',
          r: 'rgb(21, 129, 88)',
          a2: 'rgb(19, 133, 90)',
          last: 'rgb(11, 89, 40)'
          };

        default: return {
            v: 'rgb(107, 0, 119)',
            a: 'rgb(92, 0, 102)',
            n: 'rgb(76, 0, 84)',
            d: 'rgb(60, 0, 66)',
            e: 'rgb(44, 0, 48)',
            r: 'rgb(28, 0, 31)',
            a2: 'rgb(13, 0, 15)',
            last: 'rgb(0, 0, 0)'
          };
      }
    }

    const colors = colorLogoSwitch();

    return (   
        <a href="/" className="header__logo">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 475 125" space="preserve">

                <defs>

                    {/* V */}
                    <linearGradient   spreadmethod="pad" x1="0%" y1="0%" x2="100%" y2="0%" id='VGradient' > 
                        <stop offset="0%" style={{stopColor: colors.v, stopOpacity: 1}}>
                        <stop offset="100%" style={{stopColor: colors.a, stopOpacity: 1}}>
                        </stop></stop>
                    </linearGradient>

                     {/* A */}
                    <linearGradient   spreadmethod="pad" x1="0%" y1="0%" x2="100%" y2="0%" id='AGradient' > 
                        <stop offset="0%" style={{stopColor: colors.a, stopOpacity: 1}}>
                        <stop offset="100%" style={{stopColor: colors.n, stopOpacity: 1}}>
                        </stop></stop>
                    </linearGradient>

                    {/* N */}
                    <linearGradient   spreadmethod="pad" x1="0%" y1="0%" x2="100%" y2="0%" id='NGradient' > 
                        <stop offset="0%" style={{stopColor: colors.n, stopOpacity: 1}}>
                        <stop offset="100%" style={{stopColor: colors.d, stopOpacity: 1}}>
                        </stop></stop>
                    </linearGradient>

                    {/* D */}
                    <linearGradient   spreadmethod="pad" x1="0%" y1="0%" x2="100%" y2="0%" id='DGradient' > 
                        <stop offset="0%" style={{stopColor: colors.d, stopOpacity: 1}}>
                        <stop offset="100%" style={{stopColor: colors.e, stopOpacity: 1}}>
                        </stop></stop>
                    </linearGradient>

                    {/* E */}
                    <linearGradient   spreadmethod="pad" x1="0%" y1="0%" x2="100%" y2="0%" id='EGradient' > 
                        <stop offset="0%" style={{stopColor: colors.e, stopOpacity: 1}}>
                        <stop offset="100%" style={{stopColor: colors.r, stopOpacity: 1}}>
                        </stop></stop>
                    </linearGradient>

                    {/* R */}
                    <linearGradient   spreadmethod="pad" x1="0%" y1="0%" x2="100%" y2="0%" id='RGradient' > 
                        <stop offset="0%" style={{stopColor: colors.r, stopOpacity: 1}}>
                        <stop offset="100%" style={{stopColor: colors.a2, stopOpacity: 1}}>
                        </stop></stop>
                    </linearGradient>

                    {/* A2 */}
                    <linearGradient   spreadmethod="pad" x1="0%" y1="0%" x2="100%" y2="0%" id='A2Gradient' > 
                        <stop offset="0%" style={{stopColor: colors.a2, stopOpacity: 1}}>
                        <stop offset="100%" style={{stopColor: colors.last, stopOpacity: 1}}>
                        </stop></stop>
                    </linearGradient>

                </defs>

                {/* V */}
                <path fill="url(#VGradient)" d="M60.4,72.5c0.1,0.3,0.3,0.3,0.6,0.2c3.8-11.3,7.6-22.7,11.2-34.1c4.3,0,8.5,0,12.9,0
                    c-5.6,15.8-11.1,31.5-16.7,47.3c-5.1,0-10.2,0-15.4,0c-5.2-15.7-11.2-31.2-16.4-47.3c4.5,0,8.6,0,12.8,0
                    C52.8,49.9,57,61.1,60.4,72.5z"/>

                {/* A */}
                <path fill="url(#AGradient)" d="M123.3,52.6c-4.1,11-8.1,22.1-11.6,33.3c-4.3,0-8.5,0-12.8,0c5.9-15.8,11.7-31.6,17.6-47.4
                    c4.5,0,8.9,0,13.6,0c5.8,15.7,11.7,31.5,17.6,47.3c-4.3,0-8.6,0-12.9,0C131.3,74.7,127.1,63.8,123.3,52.6z"/>

                {/* N */}
                <path fill="url(#NGradient)" d="M208.3,85.8c-4.1,0-8,0-12.2,0c-6.1-9.1-12.2-18.4-18.6-27.9c0,9.5,0,18.6,0,27.9c-4.1,0-8.1,0-12.2,0
                    c0-15.8,0-31.5,0-47.3c4.1,0,8.1,0,12.2,0c6.1,9.3,12.3,18.7,18.6,28.3c0-9.5,0-18.9,0-28.3c4.1,0,8.1,0,12.2,0
                    C208.3,54.3,208.3,70,208.3,85.8z"  />

                {/* D */}
                <path fill="url(#DGradient)" d="M229,85.9c0-15.9,0-31.6,0-47.4c1.2,0,2.3,0,3.5,0c6.3,0,12.6-0.1,18.8,0c2.8,0,5.4,1,7.9,2.1
                    c2.4,1.1,4.7,2.5,6.5,4.3c2.1,2.1,3.8,4.6,4.9,7.4c1.4,3.6,2.1,7.2,1.9,11.1c-0.2,5.1-1.8,9.8-4.9,14c-3.3,4.5-8.1,6.8-13.4,8.2
                    c-2.5,0.6-5.1,0.3-7.6,0.3c-5.4,0.1-10.7,0-16.1,0C230.2,85.9,229.7,85.9,229,85.9z M241.2,49c0,8.7,0,17.5,0,26.3
                    c0.3,0.1,0.6,0.1,0.8,0.1c2.7-0.1,5.4,0.1,8.1-0.2c5-0.7,8.7-3.9,9.9-8.9c0.6-2.4,0.7-4.8,0.2-7.2c-0.6-3.5-2.2-6.4-5.3-8.2
                    c-4.1-2.5-8.8-2.3-13.3-2.1C241.5,48.8,241.4,48.9,241.2,49z" />

                {/* E */}
                <path fill="url(#EGradient)" d="M322.4,76.5c0,3.3,0,6.3,0,9.3c-10,0-19.9,0-30,0c0-15.8,0-31.5,0-47.3c10,0,19.9,0,30,0c0,3.1,0,6.1,0,9.3
                    c-5.9,0-11.9,0-18,0c0,3.2,0,6.3,0,9.5c5.2,0,10.5,0,15.8,0c0,3.1,0,6,0,9.1c-5.3,0-10.5,0-15.8,0c0,3.4,0,6.6,0,10.1
                    C310.4,76.5,316.3,76.5,322.4,76.5z"/>


                {/* R */}
                <path fill="url(#RGradient)" d="M368.5,67.5c3.8,6.2,7.4,12.2,11.1,18.3c-4.4,0-8.8,0-13.3,0c-3.3-5.8-6.7-11.6-10-17.4c-0.8,0-1.5,0-2.4,0
                    c0,5.8,0,11.5,0,17.4c-4.1,0-8,0-12,0c0-15.7,0-31.4,0-47.3c1,0,2,0,2.9,0c6.9,0,13.8-0.1,20.7,0.1c3.2,0.1,6,1.4,8.5,3.4
                    c3.8,2.9,5.4,6.8,5.5,11.5c0,4.2-1.3,7.7-4.3,10.6c-1.5,1.4-3.3,2.3-5.2,3C369.7,67.2,369.2,67.3,368.5,67.5z M354,60
                    c2,0,3.9,0,5.8,0c1.3,0,2.6-0.1,3.9-0.4c2.5-0.5,3.9-2.7,3.7-5.8c-0.2-3.5-1.9-5.3-5.5-5.5c-1.6-0.1-3.3,0-4.9,0c-1,0-2-0.2-3,0.1
                    C354,52.3,354,56.1,354,60z"/>

                {/* A2 */}
                <path fill="url(#A2Gradient)" d="M443.7,85.9c-4.3,0-8.4,0-12.8,0c-3.8-11.1-7.6-22.3-11.4-33.6c-4.1,11.2-8,22.3-11.7,33.5
                    c-4.2,0-8.4,0-12.7,0c5.8-15.8,11.6-31.6,17.6-47.3c4.5,0,8.8,0,13.5,0C432.1,54.1,437.8,70,443.7,85.9z"/>

            </svg>
        </a>
    )
}

const mapStateToProps = state => ({
  actualSong: state.songs.actualSong
})

export default connect(mapStateToProps)(LogoVandera);
