import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
  Tooltip,
} from '@material-tailwind/react';

export default function Example({ preview }) {
  const truncate = (string = '', maxLength = 100) =>
    string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

  return (
    <Card className="  w-96 previeww">
      <CardHeader floated={false} className="relative h-50">
        <img
          className="w-full"
          src={
            preview.image !== 'N/A'
              ? preview.image
              : 'https://via.placeholder.com/400'
          }
          alt=""
        />
      </CardHeader>

      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {preview.title}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {truncate(preview.description, 170)}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <a href={preview.url} target="_blank" rel="noopener noreferrer">
          <Tooltip content={truncate(preview.url, 30)}>
            <Button variant="gradient" fullWidth>
              Website Link
            </Button>
          </Tooltip>
        </a>
      </CardFooter>
    </Card>
  );
}
