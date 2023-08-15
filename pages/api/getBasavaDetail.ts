import sdk from "node-appwrite";

export default function handler(req: any, res: any) {
  const client = new sdk.Client();
  const databases = new sdk.Databases(client);
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64db1d78ec33e5f39926')
    .setKey("628637175803cd5dee24769d5b7177b00971c61de09aba52642cd1f9a969ebeed17d7ebadba305f56f5b8f8fb7f9637887e9d1394224639b124e0c9792fe40be69356b172f6626a07c11860d342e5233ce51f647733c04b016618546820540ec21f4e574bdf844b3ea16ab84e505f94b43d770134e6a82757bdcbfd12c0500c1");
  const user = JSON.parse(req.body);
  const promise = databases.getDocument(
    "64db1f505da294ba04e3",
    "64db1f5ece59dac74965",
    `english`
  );
  promise.then(
    function (response) {
      console.log(response);
      return res.status(200).json({ message: response });
    },
    function (error) {
      console.log(error);
      return res.status(error.code).json({ message: error });
    }
  );
}
