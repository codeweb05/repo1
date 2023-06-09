﻿// Copyright (c) 2022 Sourcefuse Technologies
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import {juggler, DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import {SessionAttendees} from '../models/session-attendees.model';
import {VideoConfDatasource} from '../keys';

export class SessionAttendeesRepository extends DefaultCrudRepository<
  SessionAttendees,
  typeof SessionAttendees.prototype.id
> {
  constructor(
    @inject(`datasources.${VideoConfDatasource}`)
    dataSource: juggler.DataSource,
  ) {
    super(SessionAttendees, dataSource);
  }
}
