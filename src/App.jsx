/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  let [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      {value ? (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setValue((value = null))}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={value === good && 'has-background-success-light'}
            >
              <td>
                <button
                  data-cy={value === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={value === good ? 'button is-info' : 'button'}
                  onClick={() => {
                    value !== good
                      ? setValue((value = good))
                      : setValue((value = null));
                  }}
                >
                  {value === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
