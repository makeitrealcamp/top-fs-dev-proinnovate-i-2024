const request1 = () =>
  fetch('http://localhost:8082/api/drop/russells-reserve-15-year-2024/asset', {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNyaXN0aWFuQGJheHVzLmNvIiwic3ViIjozNTY5LCJpYXQiOjE3Mjc5MDQ1MzksImV4cCI6MTczMDQ5NjUzOX0.QPAQ5iJpHGWa4DVbNfMgUOZdTt_HGl1ermMzY4jCTvy9TW3NifeBFHhT-HYfmNypvC_yWGPy58VscihnKnNtAL8kluDAAkgno2ZOuRCxN1J0qs0-LcRWTnae02QOzLvyue1NLdyEtrVRzjEGUyTIo7-wz_fxRARtCh4NSg34JU0ZhLFWnzvjuLvQRho4kTLCnKqrzX4G4HLhN4PiJ91Hip5BSYO5J5RTdilKg1r1aa_tdkMtPyKdKdL8G-zjz6qjQczYiOb_yiVjiIysEUXH5mz7v7qAWBR2oT8KMWaIe0zDJEqa48YyXWIekZv3CcUStwl-kiZwUWdEzCp9bYIEwT-V6MVoPU-uUFWyEuUWdZaPd7BgOLeaQV3W6YU6dL2VRXPUGUq-TMnerQtRlPAiU7ClhOTr0QMtzA6BYwBhKJbE77a5un-ntukCYheh7ogHFviGz5DyKNIhJDR885ImlKNB9U8Hurf5N_kZ0aLhVV0MppKqH05lpWcjYhnGZjhNv8MZ2BBCe7IVNhq5MEDTV04TfR1UiO9A3MTZjU_ZRNTqx4gnBr0Rm-zk65vGZUwEDe_l5NGrQ2vKf9lYgtsC0fdprJbTRr7h5DY_dsOXYOUeG7Y5VW7c6zQKq-VVUCf8JTXYqpeXi1CxViwYF9pR8q4Rt9lNQAD6vlHSEyss18Q',
      'content-type': 'application/json',
      'sec-ch-ua':
        '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      Referer: 'http://localhost:3000/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: null,
    method: 'GET',
  });

const request2 = () =>
  fetch('http://localhost:8082/api/drop/russells-reserve-15-year-2024/asset', {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldi13YWxsZXRAYmF4dXMuY28iLCJzdWIiOjM2MywiaWF0IjoxNzI4MzI2NTEyLCJleHAiOjE3MzA5MTg1MTJ9.fMoj-PDfZBcJ5G2_VA9cc0HykQ8achBPUBzcVmFUwKT8yjRX2r5pSzo9urOGB42qz1zAB2jKkv8l77P3X35m-RFYqm72kr2bRDB-YPOHWEs7gEWmRYu_D1_p-bsU643rKjV7qz1v0zstwRI8SWh2Wlg9UxprebctJ1TAiBftVu5Mte8btoNdFNi2zRmCeLC-PNLnBBSfs1J2ILJQzSeNPZ5vCyYNNJyf4BDTVlm0X1jayDY6xjJvyhKu2qFxIHngpVTXzsBQukYg0SPJhJmNvuawUQiS8m7JjHyDh1iiqWAzsLIc5Kl5ape2BYqS6oOU5venR6dZy229_rCj8CKD6jZyitQLCCvAvxvC9bD5026rrfbGkPe4QLVa4O4aSQdmIhJoYdTtZdZHIlNg9qWv6KS5D87UUEInsQfAVlsnXVCdsIA4sPx5puFV7W56jWy40Ojlgd1xc9ZHh8BTSXKQY8g5xdx8quMGEwyNm2oncDh5rj20utcSVanTJ2WozM5t7uDoz_9oOIC5JYLEO5DIO7SMETidwz-7cMH6YvPL-3_9OADFEMMAAVdIUhPT6NBJagqFUZlgxnL6-8mhKjc2kTf0rmeRdmtqVbx9NDvlc3bnbuSlLorcZWhvN_-h8JadHr273tZ1YMI5S2ziF63mSuShChtN8vyetjkXgfyyBrQ',
      'content-type': 'application/json',
      'sec-ch-ua':
        '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      Referer: 'http://localhost:3000/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: null,
    method: 'GET',
  });

async function main() {
  const requests = [];
  for (let i = 0; i < 30; i++) {
    const request = i % 2 === 0 ? request1() : request2();
    requests.push(request);
  }

  try {
    const responses = await Promise.all(requests);
    const data = await Promise.all(
      responses.map(async (response, indx) => {
        const result = await response.json();
        return {
          id: indx,
          ...result,
        };
      })
    );
    const result = data.filter((d) => d?.statusCode);
    console.dir(result, { depth: null });
  } catch (error) {
    console.log('🚀 ~ main ~ error:', error);
  }
}

main();
