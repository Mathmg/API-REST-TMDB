import { NextRequest, NextResponse } from 'next/server';
import { MovieService } from '../../../src/api/services/movie.service';
import { z } from 'zod';

const querySchema = z.object({
  page: z.coerce.number().int().min(1, 'page deve ser >= 1')
});

// GET /api/users
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const validatedParams = querySchema.safeParse({
        page: searchParams.get('page') || 1,
    });
    if (!validatedParams.success) {
    return NextResponse.json(
    { error: validatedParams.error.format() },
    { status: 400 }
  );
}
    const response = await MovieService.getTopRated(validatedParams.data.page);

  return NextResponse.json(response);
}

