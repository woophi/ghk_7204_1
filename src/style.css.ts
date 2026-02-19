import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  border: '0.2px solid #FFFFFF',
  backdropFilter: 'blur(4px)',
  boxShadow: '4px 4px 7.2px 0px #FFFFFF40 inset',
  background: '#F2F3F533',
});

const box2 = style({
  backgroundColor: '#FFFFFF33',
  borderRadius: '12px',
  paddingLeft: '1rem',
  border: '0.2px solid #FFFFFF',
  backdropFilter: 'blur(4px)',
  boxShadow: '4px 4px 7.2px 0px #FFFFFF40 inset',
});
const box3 = style({
  backgroundColor: '#FFFFFF33',
  borderRadius: '8px',
  padding: '12px',
  border: '0.2px solid #FFFFFF',
  backdropFilter: 'blur(4px)',
  boxShadow: '4px 4px 7.2px 0px #FFFFFF40 inset',
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

const rowSb = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
});

const glass = style({
  display: 'flex',
  padding: '1rem 12px 28px',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '24px',
  border: '0.2px solid #FFFFFF',
  backdropFilter: 'blur(4px)',
  boxShadow: '4px 4px 7.2px 0px #FFFFFF40 inset',
  background: '#F2F3F533',
  textAlign: 'center',
  justifyContent: 'center',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  box2,
  box3,
  rowSb,
  glass,
};
