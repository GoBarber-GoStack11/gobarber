import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { month, year, day } = request.query;
    const { provider_id } = request.params;

    const listProvidersDayAvailability = container.resolve(ListProviderDayAvailabilityService)

    const availability = await listProvidersDayAvailability.execute({
      provider_id,
      day: Number(day),
      month: Number(month),
      year: Number(year),
    });


    return response.json(availability);
  }
}
