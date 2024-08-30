import React, { useEffect, useState } from 'react';

const SelectVersion = () => {
  const [selectedVersion, setSelectedVersion] = useState('');

  const versionsArr = ['v1.0.1', 'v1.0.2', 'v1.0.3', 'v1.0.4']; // Danh sách các phiên bản có sẵn

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const currentVersion = pathArray[pathArray.length - 1];

    if (currentVersion === 'latest') {
      const latestVersion = versionsArr.sort((a, b) => (a > b ? -1 : 1))[0];
      setSelectedVersion(latestVersion);
    } else if (versionsArr.includes(currentVersion)) {
      setSelectedVersion(currentVersion);
    }
  }, [versionsArr]);

  const handleChange = (e) => {
    let version = e.target.value;
    const latestVersion = versionsArr.sort((a, b) => (a > b ? -1 : 1))[0];
    if (version === latestVersion) {
      version = 'latest';
    }
    setSelectedVersion(version);
    if (version) {
      window.location.href = `/docs/${version}`;
    }
  };

  return (
    <select
      value={selectedVersion}
      onChange={handleChange}
      className="bg-gray-100 sm:ms-[80px] py-2 px-4 pe-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    >
      {versionsArr.map((version) => (
        <option key={version} value={version}>
          {version}
        </option>
      ))}
    </select>
  );
};

export default SelectVersion;