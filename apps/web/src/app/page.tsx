import { Page } from '@grndctrl/cms';
import RichText from '../components/fields/RichText';

async function getPage(): Promise<Page> {
  const page = await fetch(
    `http://localhost:3001/api/pages/64a467e7867453c9ae1743bc`
  );
  return page.json();
}

export default async function Example() {
  const page = await getPage();

  console.log('page', page);

  return (
    <main>
      <h1>{page.title}</h1>

      {page.content && <RichText content={page.content as any} />}
    </main>
  );
}
