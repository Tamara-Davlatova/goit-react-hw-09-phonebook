import s from './MainView.module.css';
export default function MainView() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>THIS IS YOUR FRIENDS</h1>
      <div className={s.container}></div>
    </div>
  );
}
