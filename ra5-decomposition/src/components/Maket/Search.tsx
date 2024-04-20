/** Строка поиска */
export default function Search() {
  return (
    <div>
      <form>
        <input
          placeholder='search'
        />
        <button type='submit' className='btn btn-primary'>
          Поиск
        </button>
      </form>
    </div>
  );
}
