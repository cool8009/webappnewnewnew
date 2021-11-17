using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<User> userManager)
        {
            if(!userManager.Users.Any())
            {
                var users = new List<User>
                {
                    new User{ UserName = "bob", Email = "bob@test.com"},
                    new User{ UserName = "tom", Email = "tom@test.com"},
                    new User{ UserName = "itzik", Email = "itzik@test.com"},

                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if (context.Messages.Any()) return;
            
            var messages = new List<Message>
            {
                new Message
                {
                    Content = "Past Message 1",
                    DateSent = DateTime.Now.AddMonths(-2),
                    
                },
                new Message
                {
                    Content = "Past Message 1",
                    DateSent = DateTime.Now.AddMonths(-2),                },
                new Message
                {
                    Content = "Past Message 1",
                    DateSent = DateTime.Now.AddMonths(-2),
                },
                new Message
                {
                    Content = "Past Message 1",
                    DateSent = DateTime.Now.AddMonths(-2),
                },
                new Message
                {
                    Content = "Past Message 1",
                    DateSent = DateTime.Now.AddMonths(-2),                
                }
                
            };

            await context.Messages.AddRangeAsync(messages);
            await context.SaveChangesAsync();
        }
    }
}