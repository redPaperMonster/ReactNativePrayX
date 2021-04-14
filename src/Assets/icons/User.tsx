import * as React from 'react';
import Svg, {SvgProps, Path, G, Mask, Defs, ClipPath} from 'react-native-svg';

function SvgUser(props: SvgProps) {
  return (
    <Svg width={17} height={20} fill="none" {...props}>
      <Path fill="#E5E5E5" d="M0 0h17v20H0z" />
      <G clipPath="url(#user_svg__clip0)">
        <Path fill="#fff" d="M-178-340h375v667h-375z" />
        <Mask id="user_svg__a" x={0} y={0} width={17} height={20}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 0a5 5 0 100 10 5 5 0 000-10zm-3 5a3 3 0 116 0 3 3 0 01-6 0zM5 12a5 5 0 00-5 5v2a1 1 0 102 0v-2a3 3 0 013-3h7a3 3 0 013 3v2a1 1 0 102 0v-2a5 5 0 00-5-5H5z"
            fill="#000"
          />
        </Mask>
        <G mask="url(#user_svg__a)">
          <Path fill="#72A8BC" d="M-4-2h24v24H-4z" />
        </G>
      </G>
      <Defs>
        <ClipPath id="user_svg__clip0">
          <Path
            fill="#fff"
            transform="translate(-178 -340)"
            d="M0 0h375v667H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const MemoSvgUser = React.memo(SvgUser);
export default MemoSvgUser;
