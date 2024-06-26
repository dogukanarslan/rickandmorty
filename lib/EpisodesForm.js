'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { generateQuery } from 'utils';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

import styles from 'styles/EpisodesForm.module.css';

const EpisodesForm = () => {
  const searchParams = useSearchParams();

  const [name, setName] = useState(searchParams.get('name') || '');
  const [episode, setEpisode] = useState(searchParams.get('episode') || '');

  const router = useRouter();

  const filterLocations = (e) => {
    e.preventDefault();

    let url = `/episodes?`;

    url += generateQuery([
      { label: 'name', value: name },
      { label: 'episode', value: episode }
    ]);

    router.push(url);
  };

  return (
    <form onSubmit={filterLocations} className={styles.form}>
      <TextInput
        value={name}
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <TextInput
        value={episode}
        label="Episode"
        onChange={(e) => setEpisode(e.target.value)}
      />

      <Button label="Search" />
    </form>
  );
};

export default EpisodesForm;
