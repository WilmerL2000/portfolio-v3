import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function CarouselDemo({ images }) {
  return (
    <Carousel className="w-full max-w-3xl container ">
      <CarouselContent>
        {images.map(({ url, _key, _type }) => (
          <CarouselItem key={_key}>
            <Card>
              <CardContent className="flex aspect-video items-center justify-center">
                <img src={url} alt={`Project image ${_type}`} loading="lazy" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
