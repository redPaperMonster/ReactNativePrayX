import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

function SvgSettings(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G fillRule="evenodd" clipRule="evenodd" fill={props.fill || '#72A8BC'}>
        <Path d="M12 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z" />
        <Path d="M12 2a1 1 0 00-1 1v.174a2.65 2.65 0 01-1.606 2.425 1 1 0 01-.264.073 2.65 2.65 0 01-2.73-.607l-.007-.008-.06-.06a1.003 1.003 0 00-1.415 0h-.001a1 1 0 000 1.415l.068.069a2.65 2.65 0 01.542 2.894 2.65 2.65 0 01-2.414 1.705H3a1 1 0 000 2h.174a2.65 2.65 0 012.423 1.601 2.65 2.65 0 01-.532 2.918l-.008.008-.06.06a1.003 1.003 0 00-.217 1.09 1 1 0 00.217.325v.001a.999.999 0 001.415 0l.069-.068a2.65 2.65 0 012.894-.543 2.65 2.65 0 011.705 2.415V21a1 1 0 002 0V20.826a2.65 2.65 0 011.601-2.423 2.65 2.65 0 012.918.532l.008.008.06.06a1.002 1.002 0 001.415 0h.001a1 1 0 000-1.416l-.068-.068a2.65 2.65 0 01-.532-2.918A2.65 2.65 0 0120.906 13H21a1 1 0 000-2H20.826a2.65 2.65 0 01-2.425-1.606.999.999 0 01-.073-.264 2.65 2.65 0 01.607-2.73l.008-.007.06-.06a1.002 1.002 0 000-1.415v-.001a1 1 0 00-1.416 0l-.068.068a2.65 2.65 0 01-2.918.532A2.65 2.65 0 0113 3.094V3a1 1 0 00-1-1zm7.4 13l.915.404a.65.65 0 00.127.714l.055.055a3.002 3.002 0 010 4.245l-.707-.708.707.707a3 3 0 01-4.244 0l-.055-.055a.65.65 0 00-.714-.127l-.01.004a.649.649 0 00-.394.593V21a3 3 0 01-6 0v-.076a.65.65 0 00-.425-.585.955.955 0 01-.059-.024.65.65 0 00-.714.127l-.054.055a3.002 3.002 0 11-4.245-4.244l.055-.055a.65.65 0 00.127-.714l-.004-.01a.649.649 0 00-.594-.394H3a3 3 0 010-6h.076a.65.65 0 00.585-.425l.024-.059a.65.65 0 00-.127-.714l-.055-.054a3 3 0 114.244-4.245l.055.055a.65.65 0 00.714.127 1 1 0 01.2-.064A.65.65 0 009 3.167V3a3 3 0 116 0v.087a.65.65 0 00.394.594l.01.004a.65.65 0 00.714-.127l.055-.055a3 3 0 014.895 3.27c-.151.365-.372.696-.65.974-.001 0 0 0 0 0l-.056.055a.65.65 0 00-.127.714c.028.064.05.13.064.2a.65.65 0 00.534.284H21a3 3 0 110 6h-.087a.65.65 0 00-.594.394L19.4 15z" />
      </G>
    </Svg>
  );
}

const MemoSvgSettings = React.memo(SvgSettings);
export default MemoSvgSettings;
